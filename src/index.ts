class App {
    private name: string = "app";

    getName():string {
	return this.name;
    }
};

const app = new App();
console.log(app.getName());
