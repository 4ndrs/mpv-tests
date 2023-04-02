const PATH = "user-data/PureMPV";

const get = () => dump(mp.get_property_native(PATH));

mp.add_key_binding("ctrl+b", "brave-dragon", get);
