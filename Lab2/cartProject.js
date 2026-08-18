import readline from "readline/promises";
import { stdin, stdout } from "process";
import { readFile, writeFile } from "fs/promises";

// Database using file starts
const FILE = "product.json";

const getCart = async () => {
  const data = await readFile(FILE, "utf-8");
  return JSON.parse(data);
};

const saveCart = async (cart) => {
  await writeFile(FILE, JSON.stringify(cart, null, 2));
};

const addToCart = async (product) => {
  const cart = await getCart();
  const isFoundInCart = cart.find((item) => item.id === product.id);
  if (isFoundInCart) {
    isFoundInCart.qty += product.qty;
  } else cart.push(product);
  await saveCart(cart);
  console.log(`${product.name} added/updated to 🛒`);
};

const displayCart = async () => {
  const cart = await getCart();
  if (cart.length == 0) {
    console.log("\nCart is empty\n");
    return;
  }
  console.table(cart);
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  console.log(`Total payable amount Rs. ${total}`);
};

const removeProduct = async (pid) => {
  const cart = await getCart();
  // const isFoundInCart = cart.find((item) => item.id === pid);
  let x = cart.length;
  const newProduct = cart.filter((item) => item.id !== pid);
  let y = newProduct.length;
  if (y < x) {
    saveCart(newProduct);
    console.log(`Product with ID ${pid} has been deleted.`);
  } else {
    console.log(`Product with ID ${pid} is not in the cart.`);
  }
};

const updateCart = async(pid) => {
  const cart = await getCart();
  const isFoundInCart = cart.find((item) => item.id === pid);
  if (isFoundInCart) {
    if(isFoundInCart.qty == 1){
      await removeProduct(pid);
    }
    else{
    isFoundInCart.qty -=1;
    await saveCart(cart);
  }
    console.log(`Quantity of Product with ID ${pid} added/updated to 🛒`);
  }
  else{
    console.log("Product is not in the cart");
  }
  

}
const main = async () => {
  let choice;
  const cin = readline.createInterface({ input: stdin, output: stdout });

  do {
    console.log("\n\nWelcome to Amazon Shopping 🛒");
    console.log("1........Show Cart");
    console.log("2........Add Product");
    console.log("3........Remove Product");
    console.log("4........Update Quantity");
    console.log("5........Checkout");
    choice = await cin.question("Enter your choice: ");

    switch (Number(choice)) {
      case 1:
        await displayCart();
        break;
      case 2:
        const item = await cin.question("Enter id,name,price,qty:");
        const [id, name, price, qty] = item.split(",").map((p) => p.trim());

        await addToCart({
          id: Number(id),
          name,
          price: Number(price),
          qty: Number(qty),
        });
        break;

      case 3:
        var pid = await cin.question("Enter the product Id which has to be removed: ");
        await removeProduct(Number(pid));
        break;

      case 4:
        pid = await cin.question("Enter the ID of the product which has to be updated and the update required(+/-): ");
        await updateCart(Number(pid));

      case 5:
        console.log("checkout");
        break;
      default:
        console.log("🛑 invalid choice! Try again");
    }
  } while (choice != 5);
  cin.close();
};

main();
