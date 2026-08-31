/// <reference types="@types/google.maps" />

import { User } from "./User";
import { Company } from "./Company";
import { Map } from "./Map";


const map = new Map('map');
map.addUserMarker(new User());
map.addCompanyMarker(new Company());

