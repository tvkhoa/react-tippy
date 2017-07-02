import makeStateAction from 'redux-state-action';

const reducerPath = 'eh/app';

const names = {
  content: {
    type: 'string',
    defaultValue: 'Content',
  },
};

export const {
  branch,
  actionCreatorFactory,
  selectorFactory,
} = makeStateAction({
  reducerPath,
  names,
});

export const contentSelector = selectorFactory('content');
