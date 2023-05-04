// Form.js
import { connect } from 'react-redux';
// ...

const mapDispatchToProps = dispatch => ({
  updateFormData: (name, email) => dispatch(updateFormData(name, email)),
});

export default connect(null, mapDispatchToProps)(Form);
