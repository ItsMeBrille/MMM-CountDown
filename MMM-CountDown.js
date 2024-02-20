Module.register("MMM-CountDown", {
    // Default module config
    defaults: {
        targetDate: "2062-01-01",
        text: "Halleys comet is $ hours away",
        endtext: "Its here now",
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

        if (this.countdown < 0) {
            countdownText.innerHTML = this.config.endtext;
            return wrapper.appendChild(countdownText);
        }
        
        countdownText.innerHTML = this.config.text.replace("$", `<span class="rainbow">${this.countdown}</span>`);
        return wrapper.appendChild(countdownText);
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