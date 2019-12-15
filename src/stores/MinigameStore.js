import { observable, action } from 'mobx'

export default class MinigameStore {
    @observable minigames =
        [
        {
            minigameType: "sorting",
            question: "What is right?",
            options: ["pasjföajs döjasödja ösdj öadöadöl ölmaölma aölsd mölas", "ashdlashdla  adl kja", "adhaohd adlajdlkja aldjalkjsd", "adnalskdlk ak lakndlka aklndasd"],
            answer: ["right"]
        },
        {
            minigameType: "mc",
            question: "What is right?",
            options: ["wrong", "right", "wrong", "wrong"],
            answer: ["right"]
        },
        {
            minigameType: "sorting",
            question: "Right order?",
            options: ["2", "4", "1", "3"],
            answer: ["1","2","3","4"]
        }
    ]
}

