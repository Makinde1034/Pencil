import {createStore} from 'vuex'
import articleModule from './articleModule'
import userModule from './userModule'
import toggleModule from './toggleModule'

const store = createStore({
    modules : {
        articleModule,
        userModule,
        toggleModule
    }
})

export default store