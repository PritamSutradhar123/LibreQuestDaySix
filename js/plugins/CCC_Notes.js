/*:
 * @plugindesc Custom Quest Log for CCC Training Objectives (Auto-Wrap Version).
 * @help Use $gameVariables.setNote(id) in a script call to set Variable 1.
 */

(function() {
    // Blueprint for the variable function
    Game_Variables.prototype.setNote = function(id) {
        var note = "";
        switch (id) {
            // --- APPLICATION SYSTEMS & SECURITY ---
            case 1: note = "APPLICATION: The primary purpose of an application program is to meet specific user needs."; break;
            case 2: note = "SHORTCUT: Press F11 to manage Styles and Formatting in LibreOffice."; break;
            case 3: note = "OSS: LibreOffice is an explicit example of open-source software suite utilities."; break;
            case 4: note = "SECURITY: In network architectures, SSL stands for Secure Socket Layer."; break;
            case 5: note = "MACRO: The option to record a macro is situated under the Tools menu."; break;
            case 6: note = "DEPOSITS: Fixed Deposits (FD) consistently earn higher interest rates than standard savings."; break;
            case 7: note = "CROSS REFERENCE: Inserting Cross References allows jumping to text passages, targets, and field bookmarks."; break;
            case 8: note = "SHORTCUT: The shortcut key designated for Heading 3 in Writer is Ctrl+3."; break;
            case 9: note = "HARDWARE: The resolution capabilities of dot matrix printers are evaluated in Dots Per Inch."; break;
            case 10: note = "AUTHENTICATION: Authentication in AEPS services utilizes an individual's Aadhaar and fingerprint."; break;

            // --- COMPUTATIONS & MOBILE BANKING ---
            case 11: note = "CALC: The mathematical output expression of =MIN(5,2,8,1) in Calc returns 1."; break;
            case 12: note = "HELP: To activate the built-in Help interface in Office, press the F1 key."; break;
            case 13: note = "BANKING: USSD service is utilized for executing mobile banking operations without the internet."; break;
            case 14: note = "EXTENSION: The native template configuration extension for LibreOffice Writer is .ott."; break;
            case 15: note = "HISTORY: The specific phrase 'word processing' was originally pioneered by IBM."; break;
            case 16: note = "PRINT: The default keyboard combination to bring up the Print dialog is Ctrl+P."; break;
            case 17: note = "SHORTCUT: Superscript utilizes ctrl+shift+p while Subscript matches with ctrl+shift+b."; break;
            case 18: note = "MACRO: Saved and newly initialized documents automatically incorporate a Standard library."; break;
            case 19: note = "REGULATION: The comprehensive insurance sector across India is structurally regulated by IRDAI."; break;
            case 20: note = "AUTOTEXT: The command string for Autotext deployment in Writer is Ctrl+F3."; break;

            // --- DATA EXTRACTIONS & PAYMENTS ---
            case 21: note = "DNS: Domain Names are dynamically parsed and converted into valid IP Addresses by DNS."; break;
            case 22: note = "ABRS: The abbreviation layout of ABRS stands for Aadhaar Based Remittance Service."; break;
            case 23: note = "VISUALS: A distinct graphic that shows up blurred behind body text is a Watermark."; break;
            case 24: note = "PASTE SPECIAL: The key parameters to run Paste Special inside Calc is Ctrl+Shift+V."; break;
            case 25: note = "MATH: Running the command =product(7,2) generates a total evaluation value of 14."; break;
            case 26: note = "QUICK ACCESS: Shortcut icons are deployed to provide immediate quick access to assets."; break;
            case 27: note = "RTGS: The absolute minimum monetary limit to process an RTGS transaction is 2 Lakh."; break;
            case 28: note = "FINANCE: Commercial banks issue interest outlays directly to individuals on Deposits."; break;
            case 29: note = "STORAGE: The baseline repository location to store files in Writer is Document."; break;
            case 30: note = "QR CODE: The standard structural layout for a QR code means Quick Response Code."; break;

            // --- DATA HANDLING & LAYOUTS ---
            case 31: note = "PROCESSOR: A classic Word processor allows individuals to seamlessly compose and edit text files."; break;
            case 32: note = "UPI: A primary operational intent of an integrated UPI QR code is to pay or receive money."; break;
            case 33: note = "CO\u2082: To place the number '2' at its proper downward index position, choose Subscript."; break;
            case 34: note = "COMPATIBILITY: Standard multimedia files such as mp3 formats cannot be saved inside Writer."; break;
            case 35: note = "PAGE SETUP: Setting all peripheral margins throughout a file is called Page Setup."; break;
            case 36: note = "SPREADSHEET: Creating complex, dynamic graphic presentations is an operation a spreadsheet cannot do."; break;
            case 37: note = "HARDWARE: The computer keyboard is classified as a classic alphanumeric input device."; break;
            case 38: note = "CALC: Evaluating =min(6,10<6,4) yields 0 because the boolean logic 10<6 evaluates to false/0."; break;
            case 39: note = "RAILWAY: The dedicated service number to execute IRCTC mobile SMS inquiries is 139."; break;
            case 40: note = "NAVIGATION: The designated navigation command to leap to the absolute end of a text line is End."; break;

            // --- FILE SCHEMATICS & EVALUATION ---
            case 41: note = "IMAGE MAP: An Image Map tracking layer configured underneath a target graphic is client-side."; break;
            case 42: note = "PRESENTATION: Initializing a completely clean presentation workspace uses the command Ctrl+N."; break;
            case 43: note = "EMAIL: Outbound message creation must always pass through the Compose terminal segment."; break;
            case 44: note = "WRITER: There are a total index of 11 working interactive menus inside Writer."; break;
            case 45: note = "WATERMARK: Setting up an overlay watermark in Writer uses the Format menu tab."; break;
            case 46: note = "REPRESENTATION: Columns utilize letters, whereas rows are explicitly used to represent numbers."; break;
            case 47: note = "GEOMETRY: The literal intersection of an individual column and row is defined as a Cell."; break;
            case 48: note = "ZOOM: The definitive maximum magnification zoom boundary possible inside Calc is 400%."; break;
            case 49: note = "MONITOR: The designated operational console that displays active computational work is the Monitor."; break;
            case 50: note = "FORMULA: Excel and Calc treat any expression statement leading with '=' as a Formula."; break;

            default: note = "System error: Note ID " + id + " not found."; break;
        }

        // --- AUTOMATIC WRAPPER LOGIC ---
        function wrapText(str) {
            var maxLength = 45; // Max characters per line for the default window
            var words = str.split(' ');
            var currentLine = '';
            var finalOutput = '';

            for (var i = 0; i < words.length; i++) {
                if ((currentLine + words[i]).length <= maxLength) {
                    currentLine += (currentLine === '' ? '' : ' ') + words[i];
                } else {
                    finalOutput += currentLine + '\n';
                    currentLine = words[i];
                }
            }
            return finalOutput + currentLine;
        }

        // Apply wrap and save to Variable 1
        var wrappedNote = wrapText(note);
        this.setValue(1, wrappedNote); // Sets \V[1]
    };
})();
