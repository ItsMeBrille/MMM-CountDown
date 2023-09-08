Module.register("MMM-CountDown", {
    // Default module config
    defaults: {
        targetDate: "2050-12-31T00:00:00", // Replace with your target date in ISO format
    },

    // Override the start method.
    start: function () {
        var self = this;
        self.countdown = 0;

        // Schedule the countdown update timer
        setInterval(function () {
            self.updateCountdown();
            self.updateDom();
        }, 1000*60*60);
    },

    // Override the getDom method to create the module content
    getDom: function () {
        var wrapper = document.createElement("div");

        var countdownText = document.createElement("div");
        countdownText.className = "countdown-text small";

        if (this.countdown > 0) {
            countdownText.innerHTML = `Siste skoledag er <span class="rainbow">${this.countdown}</span> timer unna`;
        } else {
            countdownText.innerHTML = "Tiden er ute!";
        }

        wrapper.appendChild(countdownText);

        return wrapper;
    },

    // Override the notificationReceived method to handle updates from other modules
    notificationReceived: function (notification, payload, sender) {
        if (notification === "DOM_OBJECTS_CREATED") {
            this.updateCountdown();
            this.updateDom();
        }
    },

    // Function to calculate and update the countdown
    updateCountdown: function () {
        var targetDate = new Date(this.config.targetDate);
        var currentDate = new Date();
        var timeDifference = targetDate - currentDate;

        // Calculate the countdown in hours
        this.countdown = Math.max(Math.ceil(timeDifference / 3600000), 0);
    },

    getStyles: function () {
        return ["MMM-CountDown.css"];
    },
});