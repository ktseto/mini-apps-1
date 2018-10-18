class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStep: 'Checkout',
      checkout_id: null,
    };
    this.next = {
      'Checkout': 'Account',
      'Account': 'Contact',
      'Contact': 'Billing',
      'Billing': 'Confirm',
      'Confirm': 'Checkout',
    };
  }

  handleNext(e) {
    e.preventDefault();

    const endpoint = e.target.id;

    $.ajax({
      url: '/' + endpoint,
      method: 'POST',
      data: `checkout_id=${this.state.checkout_id}&${$(e.target).serialize()}`,
    })
    .done((id) => {
      // js doesn't like me using e.target.id in the line below...
      // something about reusing event target and it's now null...
      if (endpoint === 'checkout') {
        this.setState({
          currentStep: this.next[this.state.currentStep],
          checkout_id: id,
        });
      } else {
        this.setState({ currentStep: this.next[this.state.currentStep] });
      }
    });
  }

  // componentDidMount() {
  //   this.setState({ step: 'Checkout' });
  // }

  render() {
    return (
      <div>
        <div><Checkout currentStep={this.state.currentStep} handleNext={this.handleNext.bind(this)}/></div>
        <div><Account currentStep={this.state.currentStep} handleNext={this.handleNext.bind(this)}/></div>
        <div><Contact currentStep={this.state.currentStep} handleNext={this.handleNext.bind(this)}/></div>
        <div><Billing currentStep={this.state.currentStep} handleNext={this.handleNext.bind(this)}/></div>
        <div><Confirm currentStep={this.state.currentStep} handleNext={this.handleNext.bind(this)}/></div>
      </div>
    );
  }
}


// const Checkout = ({ currentStep, handleNext }) => (
//   <div style={{display: currentStep === 'Checkout' ? 'block' : 'none'}}>
//     <p>Welcome to your cart!</p>
//     <button onClick={handleNext}>
//     Check Out</button>
//   </div>
// );

const Checkout = ({ currentStep, handleNext }) => (
  <div style={{display: currentStep === 'Checkout' ? 'block' : 'none'}}>
    <p>Welcome to your cart!</p>
    <form id="checkout"
          onSubmit={handleNext}
          action="/checkout"
          method="POST">
      <input type="submit" value="Check out"/>
    </form>
  </div>
);

// const Account = ({ currentStep, handleNext }) => (
//   <div id="account"
//        style={{display: currentStep === 'Account' ? 'block' : 'none'}}>
//     <div>Name: <input type="text" id="name"/></div>
//     <div>Email: <input type="text" id="email"/></div>
//     <div>Password: <input type="text" id="password"/></div>
//     <button onClick={handleNext}>Next</button>
//   </div>
// );




const Account = ({ currentStep, handleNext }) => (
  <form id="account"
        onSubmit={handleNext}
        action="/account"
        method="POST"
        style={{display: currentStep === 'Account' ? 'block' : 'none'}}>
    <div>Name: <input type="text" id="name" name="name"/></div>
    <div>Email: <input type="text" id="email" name="email"/></div>
    <div>Password: <input type="text" id="password" name="password"/></div>
    <input type="submit" value="Next"/>
  </form>
);
//<input type="submit" onClick={handleNext}/>
//<button onClick={handleNext}>Next</button>

//    <div>Email: <input type="text" id="email"/></div>
//    <div>Password: <input type="text" id="password"/></div>
// const Account = ({ currentStep, handleNext }) => (
//   <form id="account"
//         action="/account"
//         method="POST"
//         style={{display: currentStep === 'Account' ? 'block' : 'none'}}>
//     <div>Name: <input type="text" id="name"/></div>
//     <button id="accountButton" onClick={handleNext}>Next</button>
//   </form>
// );
//<input type="submit" onClick={handleNext}/>  
//

const Contact = ({ currentStep, handleNext }) => (
  <button style={{display: currentStep === 'Contact' ? 'block' : 'none'}}
          onClick={handleNext}>
  Next</button>
);

const Billing = ({ currentStep, handleNext }) => (
  <button style={{display: currentStep === 'Billing' ? 'block' : 'none'}}
          onClick={handleNext}>
  Next</button>
);

const Confirm = ({ currentStep, handleNext }) => (
  <button style={{display: currentStep === 'Confirm' ? 'block' : 'none'}}
          onClick={handleNext}>
  Purchase</button>
);


ReactDOM.render(
  <App />,
  document.getElementById('app')
);
