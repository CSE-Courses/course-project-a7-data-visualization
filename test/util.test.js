//test suit using jest, refer to readme file

const { makeApiCallCodTest: makeApiCallCodTEST } = require("/Users/DeVante/IdeaProjects/course-project-a7-data-visualization/src/static/codApiCalls.js");
const { checkMultipleMatches: testMultiMatch} = require("/Users/DeVante/IdeaProjects/course-project-a7-data-visualization/src/static/mutipleMatchTest.js");

test('API is called and request is sent',()=>{
    const value = makeApiCallCodTEST("curruption123456","warzone","psn");
    //valid username, gamemode, platform
    expect(value).toBe(true);
});

test('API is called and request is sent',()=>{
    const value = makeApiCallCodTEST("po 00p","warzone","psn");
    //invalid username
    expect(value).toBe(true);
});

test('API is called and request is sent',()=>{
    const value = makeApiCallCodTEST("curruption123456","bunggie","psn");
    //invalid game mode
    expect(value).toBe(true);
});

test('API is called and request is sent',()=>{
    const value = makeApiCallCodTEST("curruption123456","warzone","stadia");
    //invalid platform
    expect(value).toBe(true);
});

test('checks to make sure multiple match data is ',()=> {
    const value = testMultiMatch();
    expect(Object.keys(value).length === 0).toBe(false);
});

test('check to see back end visuals are linked to the front end',()=>{
    const value = makeApiCallCodTEST("curruption123456","warzone","psn");
    //valid username, gamemode, platform
    expect(value).toBe(true);
})

//API call should be sent regardless of the validity of the credentials given

