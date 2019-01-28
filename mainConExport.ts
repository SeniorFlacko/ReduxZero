import { contadorReducer } from "./contador/contador.index";
import { incrementadorAction } from './contador/contador.index';

console.log(contadorReducer(12, incrementadorAction));