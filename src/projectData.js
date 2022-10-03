const data = {
    projectData:[
        {
            id: 1,
            topLine: 'Shopify Automation',
            description: 'Update the inventory of a Shopify store',
            buttonLabel: 'View Details',
            img: require('./images/frgtact.png'),
            alt: 'frg-tactical logo',
        
            title: "Shopify Inventory Automation",
            bigdesc: "First Responder Gear Tactical is a Shopify store that includes over 11,000 skus. The owner needed a way to automate inventory levels for each of these products to avoid spending time manually updating items from a csv file provided by a distributor. \n\nThe solution utilizes GitHub actions to run a python script on a daily basis. The script gets the current product inventory from the distributor's ftp server and gets the current inventory from the Shopify store. Inventory levels are compared for each sku and updates are pushed to the Shopify store to update items on the Shopify store that do not match the distributor's supply level.",
            tech: "Python / Shopify API / GitHub Actions",
            bigimg: require('./images/frg-tactical-inv.PNG'),
            liveproject: "https://frgtactical.com/",
            githubrepo: "url to git1"
        },
        {
            id: 2,
            topLine: 'Backend API',
            description: 'DevOps & Endpoint development for a CMS',
            buttonLabel: 'View Details',
            img: require('./images/cms-api.PNG'),
            alt: 'React Application',

            title: "Backend API and Database Management",
            bigdesc: "CSB is a comic artist that produces several comics over the course of a week. The comics are posted to a wordpress site but the artist wanted an alternative content management system for the archive of comics. \n\nThe project utilizes GitHub Actions and a Python script to get data from the wordpress RSS feed, posting the information to CockroachDB and saving each comic image to a Wasabi S3 bucket. This process runs on a schedule updating the database with the new comics on a daily basis. \n\nThe API is also built with Python using Gunicorn and deployed with Heroku. Multiple endpoints were created to support a frontend development project that utilizes the data and images.",
            tech: "Python / Boto3 / Psycopg2 / CockroachDB / Wasabi S3 / Heroku / Gunicorn / GitHub Actions / RSS",
            bigimg: require('./images/cms-api.PNG'),
            liveproject: "https://capagenda.github.io/cscms-src/",
            githubrepo: "https://github.com/ComicStrip/apicsb"
        },
        {
            id: 3,
            topLine: 'Front-End SPA',
            description: 'React deployment utilizing data from an API',
            buttonLabel: 'View Details',
            img: require('./images/front-end-ui.PNG'),
            alt: 'Cloud database / API',

            title: "Front-end single page React application",
            bigdesc: "Displaying the over 1800 comics created and served through API endpoints required develpopment of a front-end website. \n\nThis front-end was developed as a single page application built using React with styled components. The design for the project was kept simple and modern with the main focus on displaying a comic. Navigating through the 1800+ comics is accomplished with javascript and React hooks allowing for displaying next, previous, random, first and most recent comics by interacting with API endpoints.\n\nThe application's design is responsive to different screen sizes and the code is set up for easy maintainability. Future development on the project will look to add web3 technologies and additional comic navigation options.",
            tech: "React / Styled Components / GitHub Actions / GitHub Pages / HTML / CSS / Javascript",
            bigimg: require('./images/front-end-large.PNG'),
            liveproject: "https://capagenda.github.io/cscms-src/",
            githubrepo: "https://github.com/CapAgenda/cscms-src"
        },
        {
            id: 4,
            topLine: 'AI Audio Transcription',
            description: 'Jupyter Notebook using AI to create SRT transcripts',
            buttonLabel: 'View Details',
            img: require('./images/wave-form.PNG'),
            alt: 'Audio Waveform',

            title: "Whisper openAI bridge to SRT transcripts",
            bigdesc: "Podcasters needed a way to create timestamped transcriptions easily for each episode. The open AI project Whisper provides the ability to create transcripts from an audio file. \n\nThe jupyter notebook accepts an uploaded audio file or a URL to an audio file online and outputs a transcript for the audio in SRT format. The notebook allows the user to select the model to use and is set up to run in a free Google Colab account using a virtual machine GPU.",
            tech: "Jupyter Notebook / Whisper AI / Google Colab / GitHub / Python",
            bigimg: require('./images/sound-board.PNG'),
            liveproject: "https://github.com/CapAgenda/whispercast",
            githubrepo: "https://github.com/CapAgenda/cscms-src"
        },
    
    ],
};

export default data