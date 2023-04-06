export const COURSE_STATES = {
    0: "purchased",
    1: "activated",
    2: "deactivated",
}


export const normallizeOwnedCourse = web3 => (course, ownedCourse) => {
    return {
        ...course,
        ownedCourse: ownedCourse.id,
        proof: ownedCourse.proof,
        owned: ownedCourse.owner,
        price: web3.utils.fromWei(ownedCourse.price),
        state: COURSE_STATES[ownedCourse.state]
    }
}