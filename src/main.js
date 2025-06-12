import './index.css'
import { createIcons, icons } from 'lucide'
import { restoreConnectedUser } from './store/userStore';
import {router}  from './router'

document.addEventListener('DOMContentLoaded',() =>{
  restoreConnectedUser()
  router()
  createIcons({ icons });

  
})
