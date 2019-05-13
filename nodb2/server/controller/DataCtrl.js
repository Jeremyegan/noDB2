let id = 0;

const officials = [
    {id: id++, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Alexandria_Ocasio-Cortez%2C_official_portrait%2C_116th_Congress.jpg/220px-Alexandria_Ocasio-Cortez%2C_official_portrait%2C_116th_Congress.jpg', position: 'U.S. House of Respresentatives', state: 'New York', name: 'Alexandria Ocasion Cortez', about: "AOC, is an American politician who serves as the U.S. Representative for New York's 14th congressional district. The district includes the eastern part of The Bronx and portions of north-central Queens in New York City. She is a member of the Democratic Party."},
    {id: id++, imageUrl: 'https://www.lee.senate.gov/public/index.cfm?a=Files.Serve&File_id=33C1D35A-5282-4AA8-A1FD-6958B75F0ECF', position: 'U.S. Senator', state: 'Utah', name:'Senator Mike Lee', about: "Utah's Elected in 2010 as Utah's 16th Senator, Mike Lee has spent his career defending the basic liberties of Americans and Utahns as a tireless advocate for our founding constitutional principles. States Senator. Elected in 2014. Michael S. Lee is a Republican Senator." },
    {id: id++, imageUrl: 'https://www.romney.senate.gov/sites/default/files/glazed-cms-media/headshot_official.jpg', position: 'U.S. Senator', state: 'Utah', name:'Senator Mitt Romney', about: "Willard Mitt Romney (born March 12, 1947) is an American politician and businessman serving as the junior United States senator from Utah since January 2019. He previously served as the 70th Governor of Massachusetts from 2003 to 2007 and was the Republican Party's nominee for President of the United States in the 2012 election." },
    {id: id++, imageUrl: 'https://www.rubio.senate.gov/public/index.cfm?a=Files.Serve&File_id=2F9392AB-1CFB-45B9-B49E-D8A1A1B9892E', position: 'U.S. Senator', state: 'Florida', name:'Senator Marco Rubio', about: "Marco Antonio Rubio (born May 28, 1971) is an American attorney and politician currently serving as the senior United States Senator from Florida. A Republican, Rubio previously served as Speaker of the Florida House of Representatives. Rubio unsuccessfully sought the Republican nomination for President of the United States in 2016, winning presidential primaries in the State of Minnesota, the District of Columbia, and the Commonwealth of Puerto Rico." },
    {id: id++, imageUrl: 'https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTI5MjI5NjE5MDE3NTU4NjU5/ted-cruz_wikicommonsjpg.jpg', position: 'U.S. Senator', state: 'Texas', name:'Senator Ted Cruz', about: "Republican politician Ted Cruz took office as the junior U.S. Senator of Texas in 2013 and ran for the 2016 presidential election." },
    {id: id++, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Senator_Harris_official_senate_portrait.jpg/1200px-Senator_Harris_official_senate_portrait.jpg', position: 'U.S. Senate', state: 'California', name: 'Kamala Harris', about: "An American lawyer and politician who has served as the junior United States Senator from California since 2017. A member of the Democratic Party, she previously served as the 32nd Attorney General of California from 2011 to 2017, and as the 27th District Attorney of San Francisco from 2004 to 2011. On January 21, 2019, she officially announced her campaign to run for the Democratic nomination for President of the United States in the 2020 United States presidential election."}
]

module.exports = {
    getLegislatureByState: (req, res) => {
        const { state } = req.query
        console.log(state)
        const official = officials.filter((official) => {
            
            return official.state === state
        })
        res.status(200).send(official)
    },

    getAll: (req, res) => {
        res.send(officials)
    },

    updateLegislature: (req, res) => {
        let { name, position, imageUrl, state, about } = req.body;
        
        let updatedOfficial = {
            id: req.params.id,
            name,
            position,
            imageUrl,
            state,
            about
        }

        let index = officials.findIndex(official => Number(official.id) === Number(req.params.id))

        officials.splice(index, 1, updatedOfficial)
        res.status(200).send(officials);
    },

    createLegislature: (req, res) => {
        const { name, position, imageUrl, about, state } = req.body

        let legislature = {
            id: id++,
            name,
            position,
            imageUrl,
            about,
            state
        }
        officials.push(legislature);
        res.status(200).send(officials)
    },

    deleteLegislature: (req, res) => {
        const { id } = req.params
        let index = officials.findIndex(legislature => Number(legislature.id) === Number(id))

        officials.splice(index, 1)
        res.send(officials)
    }
    

   
}