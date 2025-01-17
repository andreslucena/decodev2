/*
 * DECODE App – A mobile app to control your personal data
 *
 * Copyright (C) 2019 – DRIBIA Data Research S.L.
 *
 * DECODE App is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * DECODE App is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 * email: info@dribia.com
 */

import { createSelector } from 'reselect';
import { prop } from 'ramda';
import uuid from 'uuid/v4';
import CredentialIssuerClient from 'api/credential-issuer-client';
import zenroom from 'api/zenroom-client';
import contract50 from 'api/zenroom/50-MISC-hashing.zencode';

const initialState = {
  total: '---',
  loading: false,
  date: '---',
  data: '',
  hashedData: '',
};

export const ACTIONS = {
  REFRESH_STATS_REQUEST: 'REFRESH_STATS_REQUEST',
  REFRESH_STATS_SUCCESS: 'REFRESH_STATS_SUCCESS',
  REFRESH_STATS_FAILURE: 'REFRESH_STATS_FAILURE',
  REFRESH_DATE: 'REFRESH_DATE',
  ZENROOM_REQUEST: 'ZENROOM_REQUEST',
  ZENROOM_SUCCESS: 'ZENROOM_SUCCESS',
  ZENROOM_FAILURE: 'ZENROOM_FAILURE',
};

export const callZenroom = () => async (dispatch) => {
  const data = uuid();
  dispatch({
    type: ACTIONS.ZENROOM_REQUEST,
    data,
  });
  try {
    const hashedData = await zenroom.execute(contract50, data, '');
    dispatch({
      type: ACTIONS.ZENROOM_SUCCESS,
      data,
      hashedData,
    });
  } catch (e) {
    dispatch({
      type: ACTIONS.ZENROOM_FAILURE,
      error: e.message,
    });
  }
};

export const refreshStats = () => async (dispatch) => {
  dispatch({
    type: ACTIONS.REFRESH_STATS_REQUEST,
  });
  try {
    const credentialIssuer = new CredentialIssuerClient('https://credentials.decodeproject.eu');
    const { total } = await credentialIssuer.getStats();
    dispatch({
      type: ACTIONS.REFRESH_STATS_SUCCESS,
      total,
    });
  } catch (e) {
    dispatch({
      type: ACTIONS.REFRESH_STATS_FAILURE,
      e,
    });
  }
};

export const refreshDate = () => ({
  type: ACTIONS.REFRESH_DATE,
  date: new Date(),
});

const getDummy = prop('dummy');

export const getTotal = createSelector(
  getDummy,
  prop('total'),
);

export const getDate = createSelector(
  getDummy,
  prop('date'),
);

export const getLoading = createSelector(
  getDummy,
  prop('loading'),
);

export const getData = createSelector(
  getDummy,
  prop('data'),
);

export const getHashedData = createSelector(
  getDummy,
  prop('hashedData'),
);

export default (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.REFRESH_STATS_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case ACTIONS.REFRESH_STATS_SUCCESS: {
      const { total } = action;
      return {
        ...state,
        total,
        loading: false,
      };
    }
    case ACTIONS.REFRESH_STATS_FAILURE: {
      return {
        ...state,
        total: 'XXX',
        loading: false,
      };
    }
    case ACTIONS.REFRESH_DATE: {
      const { date } = action;
      return {
        ...state,
        date,
      };
    }
    case ACTIONS.ZENROOM_REQUEST: {
      const { data } = action;
      return {
        ...state,
        loading: true,
        data,
      };
    }
    case ACTIONS.ZENROOM_SUCCESS: {
      const { hashedData } = action;
      return {
        ...state,
        loading: false,
        hashedData,
      };
    }
    case ACTIONS.ZENROOM_FAILURE: {
      const { error } = action;
      return {
        ...state,
        loading: false,
        hashedData: error,
      };
    }
    default:
      return state;
  }
};
