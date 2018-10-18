class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { step: 'Home' };
  }

  handleHomeCheckOut() {
    this.setState({ step: 'Account' });
  }

  handleAccountNext() {
    this.setState({ step: 'Contact' });
  }

  handleContactNext() {
    this.setState({ step: 'Billing' });
  }

  handleBillingNext() {
    this.setState({ step: 'Confirm' });
  }

  handleConfirmPurchase() {
    this.setState({ step: 'Home' });
  }

  // componentDidMount() {
  //   this.setState({ step: 'Home' });
  // }

  render() {
    return (
      <div>
        <div><Home currentStep={this.state.step} handleHomeCheckOut={this.handleHomeCheckOut.bind(this)}/></div>
        <div><Account currentStep={this.state.step} handleAccountNext={this.handleAccountNext.bind(this)}/></div>
        <div><Contact currentStep={this.state.step} handleContactNext={this.handleContactNext.bind(this)}/></div>
        <div><Billing currentStep={this.state.step} handleBillingNext={this.handleBillingNext.bind(this)}/></div>
        <div><Confirm currentStep={this.state.step} handleConfirmPurchase={this.handleConfirmPurchase.bind(this)}/></div>
      </div>
    );
  }
}


const Home = ({ currentStep, handleHomeCheckOut }) => (
  <button style={{display: currentStep === 'Home' ? 'block' : 'none'}}
          onClick={handleHomeCheckOut}>
  Check Out</button>
);

const Account = ({ currentStep, handleAccountNext }) => (
  <button style={{display: currentStep === 'Account' ? 'block' : 'none'}}
          onClick={handleAccountNext}>
  Next</button>
);

const Contact = ({ currentStep, handleContactNext }) => (
  <button style={{display: currentStep === 'Contact' ? 'block' : 'none'}}
          onClick={handleContactNext}>
  Next</button>
);

const Billing = ({ currentStep, handleBillingNext }) => (
  <button style={{display: currentStep === 'Billing' ? 'block' : 'none'}}
          onClick={handleBillingNext}>
  Next</button>
);

const Confirm = ({ currentStep, handleConfirmPurchase }) => (
  <button style={{display: currentStep === 'Confirm' ? 'block' : 'none'}}
          onClick={handleConfirmPurchase}>
  Purchase</button>
);


ReactDOM.render(
  <App />,
  document.getElementById('app')
);
