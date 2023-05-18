const { expect } = require('chai');
const sinon = require('sinon');

const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', () => {
  let consoleSpy;

  beforeEach(() => {
    consoleSpy = sinon.spy(console, 'log');
  }
  );

  afterEach(() => {
    consoleSpy.restore();
  }
  );

  it('validate the usage of the Utils function', () => {
    sendPaymentRequestToApi(100, 20);
    expect(consoleSpy.calledOnceWithExactly('The total is: 120')).to.be.true;
  }
  );

  it('validate the usage of the Utils function', () => {
    sendPaymentRequestToApi(10, 10);
    expect(consoleSpy.calledOnceWithExactly('The total is: 20')).to.be.true;
  }
  );

  it('validate the usage of the Utils function', () => {
    sendPaymentRequestToApi(10, 0);
    expect(consoleSpy.calledOnceWithExactly('The total is: 10')).to.be.true;
  }
  );

  it('validate the usage of the Utils function', () => {
    sendPaymentRequestToApi(0, 10);
    expect(consoleSpy.calledOnceWithExactly('The total is: 10')).to.be.true;
  }
  );
  
});
