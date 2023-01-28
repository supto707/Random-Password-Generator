const generatePasswordButton = document.getElementById("generate-password-button");
      const copyPasswordButton = document.getElementById("copy-password-button");
      const passwordDisplay = document.getElementById("password");

      generatePasswordButton.addEventListener("click", function() {
        let password = "";
        const possibleCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*(){}[]><?/";

        for (let i = 0; i < 12; i++) {
          password += possibleCharacters.charAt(Math.floor(Math.random() * possibleCharacters.length));
        }

        passwordDisplay.innerHTML = password;
        copyPasswordButton.disabled = false;
      });

      copyPasswordButton.addEventListener("click", function() {
        const textArea = document.createElement("textarea");
        textArea.value = passwordDisplay.innerHTML;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand("copy");
        textArea.remove();
        alert("Password copied to clipboard!");
      });