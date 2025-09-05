var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import fs from "fs";
import readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
const imageInstaller = () => __awaiter(void 0, void 0, void 0, function* () {
    const rl = readline.createInterface({ input, output });
    let answerName = yield rl.question("Write the url(https://fapello.com/...): ");
    answerName = answerName.replace(/ /g, "");
    if (!answerName.includes("https://fapello.com/")) {
        console.log("Wrong url!");
        let asnswerIsNan = 0;
        while (asnswerIsNan != 1) {
            answerName = yield rl.question("Write the url(https://fapello.com/...): ");
            answerName = answerName.replace(/ /g, "");
            if (!answerName.includes("https://fapello.com/")) {
                asnswerIsNan = 0;
                console.log("Wrong url!");
            }
            else {
                asnswerIsNan = 1;
            }
        }
    }
    const name = answerName.split("/")[3];
    let answerStart = yield rl.question("Where should we start to install? ");
    answerStart = answerStart.replace(/ /g, "");
    if (isNaN(parseInt(answerStart))) {
        let asnswerIsNan = 0;
        console.log("You must to write a number!");
        while (asnswerIsNan != 1) {
            answerStart = yield rl.question("Where should we start to install? ");
            answerStart = answerStart.replace(/ /g, "");
            if (isNaN(parseInt(answerStart))) {
                asnswerIsNan = 0;
                console.log("You must to write a number!");
            }
            else {
                asnswerIsNan = 1;
            }
        }
    }
    const start = parseInt(answerStart);
    let answerEnd = yield rl.question("Where should we end to install? ");
    if (isNaN(parseInt(answerEnd))) {
        console.log("You must to write a number!");
        let asnswerIsNan = 0;
        while (asnswerIsNan != 1) {
            answerEnd = yield rl.question("Where should we end to install? ");
            answerEnd = answerEnd.replace(/ /g, "");
            if (isNaN(parseInt(answerEnd))) {
                asnswerIsNan = 0;
                console.log("You must to write a number!");
            }
            else {
                asnswerIsNan = 1;
            }
        }
    }
    fs.mkdirSync("./gallery", { recursive: true });
    const end = parseInt(answerEnd);
    const fileName = `./gallery/${name}-${start}-${end}`;
    fs.mkdirSync(fileName, { recursive: true });
    for (let i = start; i < end + 1; i++) {
        let worksOn = "1000";
        if (i > 999) {
            worksOn = (Math.floor(i / 1000 + 1) * 1000).toString();
        }
        console.log(`${fileName}/${name}${i}.jpeg`);
        const response = yield fetch(` https://fapello.com/content/${name[0]}/${name[1]}/${name}/${worksOn}/${name}_${"0".repeat(worksOn.length - i.toString().length)}${i}.jpg`);
        if (response.status != 200) {
            rl.close();
            return;
        }
        const image = yield response.arrayBuffer();
        fs.writeFileSync(`${fileName}/${name}${i}.jpeg`, Buffer.from(image));
    }
    rl.close();
});
imageInstaller();
