import delay from './delay';


const quotes = [
    {
        id: "1",
        title: "Murry Wedding",
        date: "12/2/17",
        status: "New"
    },
    {
        id: "2",
        title: "University of Colorado MBB",
        date: "12/19/17",
        status: "In-Progress"
    },
    {
        id: "3",
        title: "Galvanize",
        date: "7/22/17",
        status: "Done"

    },
    {
        id: "4",
        title: "Herman Miller",
        date: "2/20/18",
        status: "New"
    },
    {
        id: "5",
        title: "Otterbox",
        date: "11/20/18",
        status: "Pending",
    }
];

function replaceAll(str, find, replace) {
    return str.replace(new RegExp(find, 'g'), replace);
}


const generateId = (quote) => {
    return replaceAll(quote.title, ' ', '-');
};

class QuoteApi {
    static getAllQuotes() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(Object.assign([], quotes));
            }, delay);
        });
    }

    static saveQuote(quote) {
        quote = Object.assign({}, quote); 
        return new Promise((resolve, reject) => {
            setTimeout(() => {

                const minQuoteTitleLength = 1;
                if (quote.title.length < minQuoteTitleLength) {
                    reject(`Title must be at least ${minQuoteTitleLength} characters.`);
                }

                if (quote.id) {
                    const existingQuoteIndex = quotes.findIndex(a => a.id === quote.id);
                    quotes.splice(existingQuoteIndex, 1, quote);
                } else {
                    quote.id = generateId(quote);
                    quote.watchHref = '';
                    quotes.push(quote);
                }

                resolve(quote);
            }, delay);
        });
    }

    static deleteQuote(quoteId) {
        return new Promise((resolve) => {
            setTimeout(() => {
                const indexOfQuoteToDelete = quotes.findIndex(quote => quote.id === quoteId);
                quotes.splice(indexOfQuoteToDelete, 1);
                resolve();
            }, delay);
        });
    }


    static getQuote(quoteId) {
        return new Promise((resolve) => {
            setTimeout(() => {
                const existingQuoteIndex = quotes.findIndex(quote => quote.id === quoteId);

                const quoteFound = Object.assign({}, quotes[existingQuoteIndex]);

                resolve(quoteFound);

            }, delay);
        });
    }

}

export default QuoteApi;
