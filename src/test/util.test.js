//test suit using jest, refer to readme file

const { makeApiCallCodTest: makeApiCallCodTEST } = require("/static/codApiCalls.js");

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

//API call should be sent regardless of the validity of the credentials given

