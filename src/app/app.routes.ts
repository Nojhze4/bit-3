import { Routes } from '@angular/router';
import { Home } from './components/page/home/home';
import { Products } from './components/page/products/products';
import { Contact } from './components/page/contact/contact';
import { NotFound } from './components/page/not-found/not-found';

export const routes: Routes = [
  
  {path: "contact",
    component: Contact,
    title: "Contact | Bienvenidos"},
    {path: "home",
    component: Home,
    title: "Home | Bienvenidos"},
    
    {path: "products",
     component: Products,
     title: "Products | Bienvenidos"},

 {path: "**",
  component: NotFound,
  title: "Error 404 Not Found"},
];
