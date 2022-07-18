const InventoryDB = [
    {
        Parts: [
            {
                partName: "5G RRH",
                description: "5G NR AU HW -AC TYPE 28GHZ GEN.2",
                comment: "Samsung 5G RRH",
                imgSrc: "./image/5g.jpg",
                imn: {
                    manufacturer: "AT1K04",
                    vzw: "SFG-AEH16Y91VZ"
                }
            }
        ]
    },
    {
        Users: [
            {
                username: 'admin',
                password: 'encrypted',
                email: 'none@me.com',
                role: 'administrator',
            }

        ]
    },
    {
        Sites: [
            {
                siteId: 'TX_DAL_PLANO_NORTH_111',
                technology: ['5G'],
                type: 'New Pole' || 'QuickSnap' || 'QuickSnap/Hub' || 'Existing Pole' || 'Roof',
                location: {
                    address: '124 Plano Pkwy',
                    city: 'Plano',
                    state: 'TX',
                    zip: '75028',
                    lat: '32.555664',
                    long: '-97.884786'
                },
                orders: [],
                status: 'Complete' || 'some other status',
                sectors: {
                    Alpha: {
                        tipHeight: 25,
                        Azimuth: 120,
                    },
                    Beta: {
                        tipHeight: 25,
                        Azimuth: 120,
                    },
                    Gamma: {
                        tipHeight: 25,
                        Azimuth: 120,
                    }
                }
            }
        ]
    }
];