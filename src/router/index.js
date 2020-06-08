import Itemdetails from '@/components/view/Itemdetails'

import Inventory from '@/components/view/Inventory'
export const routes = [{
    path: '/item/:id',
    component: Itemdetails
}, {
    path: '',
    component: Inventory
}]