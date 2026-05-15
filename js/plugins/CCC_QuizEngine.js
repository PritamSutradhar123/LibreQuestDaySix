/*:
 * @plugindesc CCC Quiz Engine - Day 6 MCQ Logic (Questions 1-50).
 * @help 1. Use $gameVariables.askQuestion(id) to load data.
 * 2. Use \V[2] for Question, \V[4]-\V[7] for Choices.
 * 3. Variable #3 stores the Correct Answer Index (1-4).
 * 4. Variable #16 stores the Correct Answer Text (String).
 */

(function() {
    Game_Variables.prototype.askQuestion = function(id) {
        var q = "", a = "", b = "", c = "", d = "", ans = 0;

        switch (id) {
            case 1:
                q = "The purpose of an application program is to:";
                a = "Convert program from high level to machine language"; b = "Meet specific user needs"; c = "Allow operating system to control resources better"; d = "Make off-line equipment run better";
                ans = 2; break; 
            case 2:
                q = "What is the shortcut key for Styles and Formatting in LibreOffice?";
                a = "F11"; b = "F6"; c = "F12"; d = "F9";
                ans = 1; break; 
            case 3:
                q = "Which of the following is an example of open-source software?";
                a = "Adobe Photoshop"; b = "Microsoft Word"; c = "Libre Office"; d = "Skype";
                ans = 3; break; 
            case 4:
                q = "What is the full form of SSL in network security?";
                a = "Serial Session Layer"; b = "Serial Socket Layer"; c = "Secure Socket Layer"; d = "Session Secure Layer";
                ans = 3; break; 
            case 5:
                q = "The record macro option is present under which menu?";
                a = "Data"; b = "Format"; c = "Insert"; d = "Tools";
                ans = 4; break; 
            case 6:
                q = "Which type of deposits earns higher interest rate?";
                a = "Current account"; b = "Fixed Deposits"; c = "Savings Account"; d = "None of the options";
                ans = 2; break; 
            case 7:
                q = "What can be done by Inserting Cross Reference in LibreOffice Writer?";
                a = "Jump to Specific text passages"; b = "Insert References as Fields in single document"; c = "Use Objects with Caption and bookmarks as targets"; d = "All the above are possible";
                ans = 4; break; 
            case 8:
                q = "LibreOffice Writer shortcut key for heading 3?";
                a = "Ctrl+1"; b = "Ctrl+2"; c = "Ctrl+shift+3"; d = "Ctrl+3";
                ans = 4; break; 
            case 9:
                q = "The resolution of a dot matrix printer is measured in:";
                a = "Megabits"; b = "Dots per inch"; c = "Hertz"; d = "Inches";
                ans = 2; break; 
            case 10:
                q = "What is used for authentication in AEPS?";
                a = "PAN Card"; b = "ATM Card"; c = "Aadhaar and fingerprint"; d = "Password only";
                ans = 3; break; 
            case 11:
                q = "What is the value of =MIN(5,2,8,1) in Calc?";
                a = "5"; b = "8"; c = "1"; d = "0";
                ans = 3; break; 
            case 12:
                q = "To get Help when using Office, you would click the:";
                a = "F1 Key"; b = "F3 Key"; c = "F2 Key"; d = "F4 Key";
                ans = 1; break; 
            case 13:
                q = "Which service is used for mobile banking without the internet?";
                a = "RTGS"; b = "AEPS"; c = "USSD"; d = "NEFT";
                ans = 3; break; 
            case 14:
                q = "___ is a file extension for template in LibreOffice Writer:";
                a = ".odt"; b = ".ott"; c = ".txt"; d = ".pdf";
                ans = 2; break; 
            case 15:
                q = "The term word processing was invented by:";
                a = "IBM"; b = "HP"; c = "Intel"; d = "Microsoft";
                ans = 1; break; 
            case 16:
                q = "What is the shortcut key to Open the Print dialog in LibreOffice?";
                a = "Ctrl+G"; b = "Ctrl+A"; c = "Ctrl+P"; d = "Ctrl+D";
                ans = 3; break; 
            case 17:
                q = "Match the following:";
                a = "i-b, ii-c, iii-a, iv-d"; b = "i-b, ii-a, iii-d, iv-c"; c = "i-c, ii-d, iii-a, iv-b"; d = "i-d, ii-c, iii-b, iv-a";
                ans = 1; break; 
            case 18:
                q = "When a document is created and saved, it automatically contains a library named:";
                a = "Module Library"; b = "Macro Library"; c = "Standard"; d = "None of the above";
                ans = 3; break; 
            case 19:
                q = "Who regulates the insurance sector in India?";
                a = "IRDAI"; b = "RBI"; c = "NABARD"; d = "SEBI";
                ans = 1; break; 
            case 20:
                q = "What is the shortcut key for Autotext used in LibreOffice Writer?";
                a = "Ctrl + F3"; b = "Ctrl + F2"; c = "Ctrl + F4"; d = "None of these";
                ans = 1; break; 
            case 21:
                q = "Domain Name (like google.com) to IP Address is done by...";
                a = "URL"; b = "IP Config"; c = "DNS"; d = "ISP";
                ans = 3; break; 
            case 22:
                q = "What is the full form of ABRS?";
                a = "Aadhaar Based remittance Service"; b = "Aadhaar Based Reminder Service"; c = "Advance Value remittance Service"; d = "None of these";
                ans = 1; break; 
            case 23:
                q = "Which of the following documents appears blurred behind the text?";
                a = "Background"; b = "Watermark"; c = "Front land"; d = "Image";
                ans = 2; break; 
            case 24:
                q = "What is the shortcut key for Paste Special in Calc?";
                a = "Ctrl+Shift+V"; b = "Ctrl+V"; c = "Ctrl+C"; d = "Ctrl+Shift+S";
                ans = 1; break; 
            case 25:
                q = "=product(7,2) will be?";
                a = "14"; b = "-14"; c = "24"; d = "-24";
                ans = 1; break; 
            case 26:
                q = "Main purpose of shortcut icon is?";
                a = "Delete file"; b = "Rename file"; c = "Quick access"; d = "Compress file";
                ans = 3; break; 
            case 27:
                q = "What is the minimum limit for a transaction in RTGS?";
                a = "2 Lakh"; b = "No Minimum Limit"; c = "1 Lakh"; d = "5 Lakh";
                ans = 1; break; 
            case 28:
                q = "Bank pays interest on:";
                a = "Deposits"; b = "Loans"; c = "Both Deposits & Loans"; d = "None of the options";
                ans = 1; break; 
            case 29:
                q = "Which is the default location to save in LibreOffice Writer?";
                a = "Desktop"; b = "Document"; c = "Downloads"; d = "OneDrive";
                ans = 2; break; 
            case 30:
                q = "QR code means:";
                a = "Quick Response Code"; b = "Quick Rolling Code"; c = "Quite Response Code"; d = "None of the above";
                ans = 1; break; 
            case 31:
                q = "Which application allows the user to compose and edit simple documents?";
                a = "Word processor"; b = "Spreadsheet"; c = "E-mail utility"; d = "Browsers";
                ans = 1; break; 
            case 32:
                q = "What is the purpose of a UPI QR code?";
                a = "To store personal data"; b = "To pay or receive money"; c = "To send messages"; d = "To track transactions";
                ans = 2; break; 
            case 33:
                q = "Which option should be used to type CO\u20822 to get 2 at its proper place?";
                a = "Bold"; b = "Underline"; c = "Subscript"; d = "Superscript";
                ans = 3; break; 
            case 34:
                q = "Which format can't be saved in LibreOffice Writer document?";
                a = "xml"; b = "doc"; c = "docx"; d = "mp3";
                ans = 4; break; 
            case 35:
                q = "The method of setting all the Margins of the document is called:";
                a = "Page Setup"; b = "Page Layout"; c = "Page Structure"; d = "Page Design";
                ans = 1; break; 
            case 36:
                q = "Spreadsheet is NOT used for:";
                a = "Managing financial & accounting docs"; b = "Creating data report"; c = "Data Analysis"; d = "Creating presentations";
                ans = 4; break; 
            case 37:
                q = "Which of the following is an input device?";
                a = "Screen"; b = "Speakers"; c = "Keyboard"; d = "Printer";
                ans = 3; break; 
            case 38:
                q = "What will be the value of =min(6,10<6,4) in Calc?";
                a = "1"; b = "4"; c = "6"; d = "0";
                ans = 4; break; 
            case 39:
                q = "Which number is used for IRCTC SMS service?";
                a = "148"; b = "191"; c = "139"; d = "116";
                ans = 3; break; 
            case 40:
                q = "The ___ is used to go to the end of the line:";
                a = "Backspace"; b = "Home"; c = "Alt"; d = "End";
                ans = 4; break; 
            case 41:
                q = "The Image Map stored in a layer below the picture is called:";
                a = "Server side Image Map"; b = "Pics Image Map"; c = "Client side image Map"; d = "None of the above";
                ans = 3; break; 
            case 42:
                q = "Which shortcut key is used to create new presentation?";
                a = "Ctrl+P"; b = "Ctrl+N"; c = "Ctrl+M"; d = "Ctrl+X";
                ans = 2; break; 
            case 43:
                q = "Which option used for to send an email?";
                a = "Compose"; b = "Subject"; c = "Body"; d = "From";
                ans = 1; break; 
            case 44:
                q = "How many menus are found in LibreOffice Writer?";
                a = "11"; b = "13"; c = "8"; d = "10";
                ans = 1; break; 
            case 45:
                q = "What is the menu used for the watermark in Writer?";
                a = "Format"; b = "File"; c = "Insert"; d = "Tools";
                ans = 1; break; 
            case 46:
                q = "In a spreadsheet, ___ are used to represent numbers:";
                a = "Cells"; b = "Rows"; c = "Columns"; d = "Blocks";
                ans = 2; break; 
            case 47:
                q = "The intersection of a column and row is called:";
                a = "Border"; b = "Table"; c = "Cell"; d = "None";
                ans = 3; break; 
            case 48:
                q = "Maximum zoom percentage possible in LibreOffice CALC?";
                a = "100%"; b = "600%"; c = "400%"; d = "800%";
                ans = 3; break; 
            case 49:
                q = "Which part of the computer displays the work done?";
                a = "RAM"; b = "Printer"; c = "Monitor"; d = "ROM";
                ans = 3; break; 
            case 50:
                q = "Any expression that begins with an equals '=' is treated as:";
                a = "Function"; b = "Formula"; c = "Graph"; d = "Chart";
                ans = 2; break; 

            default:
                q = "System Error: Missing Data for Question " + id;
                a = "-"; b = "-"; c = "-"; d = "-"; break;
        }

        var correctStr = "";
        if (ans === 1) correctStr = a;
        if (ans === 2) correctStr = b;
        if (ans === 3) correctStr = c;
        if (ans === 4) correctStr = d;

        this.setValue(2, q);
        this.setValue(3, ans);
        this.setValue(4, a);
        this.setValue(5, b);
        this.setValue(6, c);
        this.setValue(7, d);
        
        $gameVariables.setValue(16, String(correctStr));
    };
})();