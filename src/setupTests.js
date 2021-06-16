// 21 - Install and slightly configure Enzyme for testing
// Enzyme documentation - airbnb.io/enzyme
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });