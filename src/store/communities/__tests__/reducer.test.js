import { communityReducer } from '../reducer';
import { communitiesLoaded, communityLoadingError } from '../actions';

describe('communityReducer', () => {
  let state = {};
  const dataFromFirebase = [
    {
      k: '1',
      value: 'Community 1'
    },
    {
      k: '2',
      value: 'Community 2'
    }
  ];
  beforeEach(() => {
    state = {
      communities: [],
      error: false,
      errorMessage: null
    };
  });

  it('should return the initial state', () => {
    const expected = state;
    expect(communityReducer(undefined, {})).toEqual(expected);
  });

  it('should return updated state if successful', () => {
    const expected = {
      communities: dataFromFirebase,
      error: false,
      errorMessage: null
    };
    expect(
      communityReducer(state, communitiesLoaded(dataFromFirebase))
    ).toEqual(expected);
  });

  it('should return error if not successful', () => {
    const expected = {
      error: true,
      errorMessage: 'An error occurs'
    };
    expect(
      communityReducer(state, communityLoadingError('An error occurs'))
    ).toEqual(expected);
  });
});
