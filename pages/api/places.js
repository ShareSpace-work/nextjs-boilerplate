export default function handler(req, res) {
    res.status(200).json([
        { name: 'Office A', url: 'https://www.sharespace.work/pl/coworking/polska/poznan/business-link-maraton', address:'Street 12, Warsaw', img: '/images/1.png' },
        { name: 'Office B', url: 'https://www.sharespace.work/pl/coworking/niemcy/berlin/wework-warschauer-platz', address:'Street 12, Warsaw', img: '/images/3.png' },
        { name: 'Office C', url: 'https://www.sharespace.work/pl/coworking/polska/warszawa/solutions-rent-ethos', address:'Street 12, Warsaw', img: '/images/4.png' },
        { name: 'Office D', url: 'https://www.sharespace.work/pl/biuro-serwisowane/wegry/budapeszt/hubhub-budapest', address:'Street 12, Warsaw', img: '/images/2.png' },
    ])
}