print("Starting");

const test = () => {
  const desu = { message: "desu desu desu" };

  mp.set_property_native("user-data/test/desu", desu);

  print("user-data set");
};

setTimeout(test, 500);
