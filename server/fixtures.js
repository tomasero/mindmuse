if (Projects.find().count() === 0) {
    Projects.insert({
        title: 'Understand EEG Processing and Possibilities',
        team: ['Pierre Karashchuk', "Tomas Vega"],
        description: "Meteor uses local environment variables for a few things, such as configuring email. While some platforms (like Modulus) make it easy to configure them from their web dashboard, on a local dev environment the best way is to set up an alias for the `mrt` command. ",
        tags: ["eeg", "basic", "research"]
       
    });
    
    Projects.insert({
        title: 'Extend Sensory Input',
        team: ['Tomas Vega', "Jack Purvis"],
        description: "I've recently become interested in the potential to extend or replace the visual and audial modalities through the implementation of electrode arrays on the surface of the skin. In theory, matching a tonal range captured via microphone // visual spectrum captured via video feed with a topographical electrical stimulus on the forearms or back will allow the brain to combine these feeds, creating a fuller spatial comprehension.",
        tags: ["senses", "cyborgs", "bci"]
    });
    
}
