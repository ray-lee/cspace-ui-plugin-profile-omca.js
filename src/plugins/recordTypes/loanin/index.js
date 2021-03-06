import columns from './columns';
import fields from './fields';
import forms from './forms';
import idGenerators from './idGenerators';
import messages from './messages';

export default () => (configContext) => ({
  idGenerators,
  recordTypes: {
    loanin: {
      columns,
      messages,
      fields: fields(configContext),
      forms: forms(configContext),
    },
  },
});
