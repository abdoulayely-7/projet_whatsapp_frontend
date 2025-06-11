import './index.css'
import { createIcons, icons } from 'lucide'
import { restoreConnectedUser } from './store/userStore';
import {router}  from './router'
createIcons({ icons });

document.addEventListener('DOMContentLoaded',() =>{
  restoreConnectedUser()
  router()
})
