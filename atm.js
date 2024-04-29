// ( ATM cli) This somewhat complex TypeScript/Node.js project is a console-based application. When the system starts the user is( prompted with a user id and user pin.)
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {
        type: "input",
        name: "userId",
        message: "kindly enter your id."
    },
    {
        type: "number",
        name: "userPin",
        message: "kindly enter your pin."
    },
    {
        type: "list",
        name: "accountType",
        choices: ["saving", "current"],
        message: " select your account ."
    },
    {
        type: "list",
        name: "transitiontype",
        choices: ["fast cash", "withdraw"],
        message: "select your transition.",
        when(answer) {
            return answer.accountType;
        }
    },
    {
        type: "list",
        name: "amount",
        choices: [1000, 5000, 10000, 25000],
        message: "select your amount.",
        when(answer) {
            return answer.transitionType == "fast cash";
        }
    },
    {
        type: "number",
        name: "amount",
        message: "kindly enter your amount.",
        when(answer) {
            return answer.transitionType == "withdraw";
        }
    },
]);
if (answer.userId && answer.userPin) {
    const blance = Math.floor(Math.random() * 1000000);
    console.log(blance);
    const enterAmount = answer.amount;
    if (blance >= enterAmount) {
        const remianing = blance - enterAmount;
        console.log("your remaining blancr is:", remianing);
    }
    else {
        console.log("insuficient blance");
    }
}
