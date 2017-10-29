import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const quotes = [
    {
        id: "wedding",
        title: "Murry Wedding",
        date: "12/2/17",
        status: "Pending"
    },
    {
        id: "sports",
        title: "University of Colorado MBB",
        date: "12/19/17",
        status: "In-Progress"
    },
    {
        id: "company",
        title: "Galvanize",
        date: "7/22/17",
        status: "Done"

    },
    {
        id: "company2",
        title: "Herman Miller",
        date: "2/20/18",
        status: "Pending"
    },
    {
        id: "building",
        title: "Otterbox",
        date: "11/20/18",
        status: "Pending",
    }
];

function replaceAll(str, find, replace) {
    return str.replace(new RegExp(find, 'g'), replace);
}

//This would be performed on the server in a real app. Just stubbing in.
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
        quote = Object.assign({}, quote); // to avoid manipulating object passed in.
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // Simulate server-side validation
                const minQuoteTitleLength = 1;
                if (quote.title.length < minQuoteTitleLength) {
                    reject(`Title must be at least ${minQuoteTitleLength} characters.`);
                }

                if (quote.id) {
                    const existingQuoteIndex = quotes.findIndex(a => a.id === quote.id);
                    quotes.splice(existingQuoteIndex, 1, quote);
                } else {
                    //Just simulating creation here.
                    //The server would generate ids and watchHref's for new quotes in a real app.
                    //Cloning so copy returned is passed by value rather than by reference.
                    quote.id = generateId(quote);
                    quote.watchHref = `http://www.pluralsight.com/quotes/${quote.id}`;
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
