function prepareFoldersAndPdfs(teams, dataDir) {
//     if(fs.existsSync(dataDir) == true){
//         fs.rmdirSync(dataDir, { recursive: true });
//     }

//     fs.mkdirSync(dataDir);

//     for (let i = 0; i < teams.length; i++) {
//         let teamFolderName = path.join(dataDir, teams[i].name);
//         fs.mkdirSync(teamFolderName);

//         for (let j = 0; j < teams[i].matches.length; j++) {
//             let match = teams[i].matches[j];
//             createMatchScorecardPdf(teamFolderName, teams[i].name, match);
//         }
//     }
// }

// function createMatchScorecardPdf(teamFolderName, homeTeam, match) {
//     let matchFileName = path.join(teamFolderName, match.vs);

//     let templateFileBytes = fs.readFileSync("Template.pdf");
//     let pdfdocKaPromise = pdf.PDFDocument.load(templateFileBytes);
//     pdfdocKaPromise.then(function (pdfdoc) {
//         let page = pdfdoc.getPage(0);

//         page.drawText(homeTeam, {
//             x: 320,
//             y: 703,
//             size: 8
//         });
//         page.drawText(match.vs, {
//             x: 320,
//             y: 688,
//             size: 8
//         });
//         page.drawText(match.selfScore, {
//             x: 320,
//             y: 673,
//             size: 8
//         });
//         page.drawText(match.oppScore, {
//             x: 320,
//             y: 658,
//             size: 8
//         });
//         page.drawText(match.result, {
//             x: 320,
//             y: 643,
//             size: 8
//         });

//         let changedBytesKaPromise = pdfdoc.save();
//         changedBytesKaPromise.then(function (changedBytes) {
//             if(fs.existsSync(matchFileName + ".pdf") == true){
//                 fs.writeFileSync(matchFileName + "1.pdf", changedBytes);
//             } else {
//                 fs.writeFileSync(matchFileName + ".pdf", changedBytes);
//             }
//         })
//     })
// }

// function prepareExcel(teams, excelFileName) {
//     let wb = new excel4node.Workbook();

//     for (let i = 0; i < teams.length; i++) {
//         let tsheet = wb.addWorksheet(teams[i].name);

//         tsheet.cell(1, 1).string("Vs");
//         tsheet.cell(1, 2).string("Self Score");
//         tsheet.cell(1, 3).string("Opp Score");
//         tsheet.cell(1, 4).string("Result");
//         for (let j = 0; j < teams[i].matches.length; j++) {
//             tsheet.cell(2 + j, 1).string(teams[i].matches[j].vs);
//             tsheet.cell(2 + j, 2).string(teams[i].matches[j].selfScore);
//             tsheet.cell(2 + j, 3).string(teams[i].matches[j].oppScore);
//             tsheet.cell(2 + j, 4).string(teams[i].matches[j].result);
//         }
//     }

//     wb.write(excelFileName);
// }

// function addMatchToSpecificTeam(teams, homeTeam, oppTeam, selfScore, oppScore, result) {
//     let tidx = -1;
//     for (let i = 0; i < teams.length; i++) {
//         if (teams[i].name == homeTeam) {
//             tidx = i;
//             break;
//         }
//     }

//     let team = teams[tidx];
//     team.matches.push({
//         vs: oppTeam,
//         selfScore: selfScore,
//         oppScore: oppScore,
//         result: result
//     })
// }

// function addTeamToTeamsArrayIfNotAlreadyThere(teams, teamName) {
//     let tidx = -1;
//     for (let i = 0; i < teams.length; i++) {
//         if (teams[i].name == teamName) {
//             tidx = i;
//             break;
//         }
//     }

//     if (tidx == -1) {
//         teams.push({
//             name: teamName,
//             matches: []
//         })
//     }
// }