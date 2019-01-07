/**
 *  Redux saga class init
 */
import {takeEvery, all, take} from 'redux-saga/effects';
import * as types from '../actions/types';
import loginSaga from './loginSaga';
import listSaga from './listSaga';
// import appSaga from './appSaga';
import * as authSaga from './authSaga';
import * as disCloseSaga from './disCloseSaga';

export default function* watch() {
    yield all([
        takeEvery(types.LOGIN_REQUEST, loginSaga),
        takeEvery(types.GET_LIST, listSaga),
        // takeEvery(types.APP_INIT, appSaga),

        takeEvery(types.AUTH_LOGIN, authSaga.login),
        takeEvery(types.AUTH_REGISTER, authSaga.register),
        takeEvery(types.AUTH_VERIFY, authSaga.verify),
        takeEvery(types.AUTH_RESEND, authSaga.resend),
        takeEvery(types.AUTH_LOGOUT, authSaga.logout),
        takeEvery(types.AUTH_REFRESH, authSaga.refresh),


        /////////////////// 爆料
        takeEvery(types.DISCLOSE_PUBLISH, disCloseSaga.publish),
        takeEvery(types.DISCLOSE_UPLOAD, disCloseSaga.upload),
        takeEvery(types.DISCLOSE_GETLIST, disCloseSaga.getList),
        takeEvery(types.DISCLOSE_LIKE, disCloseSaga.like),
        takeEvery(types.DISCLOSE_DELETEDISCLOSE, disCloseSaga.deleteDisclose),
        takeEvery(types.DISCLOSE_GETDISCLOSEDETAIL, disCloseSaga.getDiscloseDetail),
        takeEvery(types.DISCLOSE_GETDISCLOSECOMMENTS, disCloseSaga.getDiscloseComments),
        takeEvery(types.DISCLOSE_COMMENTDISCLOSE, disCloseSaga.commentDisclose),
        takeEvery(types.DISCLOSE_LIKECOMMENT, disCloseSaga.likeComment),
        takeEvery(types.DISCLOSE_DELETECOMMENT, disCloseSaga.deleteComment),

    ]);
}
