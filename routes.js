import User from './src/components/RoutingExample/User2.vue';
import UserS from './src/components/RoutingExample/UserS';
import UserD from './src/components/RoutingExample/UserD.vue';
import UserE from './src/components/RoutingExample/UserE.vue';
import Home from './src/Home.vue';

export const routes = [
    { path: '', component: Home },
    {
        path: '/user', component: User, children: [ // Children are sub routes under that route.
            { path: '', component: UserS },
            { path: ':id', component: UserD },
            { path: ':id/edit', component: UserE }
        ]
    }
]