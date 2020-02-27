import UploadImage from "./pages/UploadImage/UploadImage";
import Catalog from "./pages/Catalog/Catalog";

const routes = [
    {path: '/upload', component: UploadImage},
    {path: '/catalog', component: Catalog},
    {path: '/', component: UploadImage},
];

export default routes;