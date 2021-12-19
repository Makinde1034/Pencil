import {createStore} from 'vuex'
import articleModule from './articleModule'
import userModule from './userModule'

const store = createStore({
    modules : {
        articleModule,
        userModule
    }
})

export default store