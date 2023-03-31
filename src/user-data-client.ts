print("Starting");

const test = () => {
  const desu = mp.get_property_native("user-data/test/desu");

  if (desu && typeof desu === "object" && "message" in desu) {
    print(`Found message: ${desu.message}`);
    return;
  }

  print(`No message found in:\n ${JSON.stringify(desu)}`);

  dump(mp.get_property_native("user-data"));
};

setTimeout(test, 2000);

export {};
