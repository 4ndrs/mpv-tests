import { boxData } from "./box";

const overlay = mp.create_osd_overlay("ass-events");

overlay.data = boxData;
overlay.update();
