import React from 'react';
import '../style.css';
import RelatedPost from '../components/RelatedPost';
import LeaveComment from '../components/LeaveComment';
import BlogSearch from '../components/BlogSearch';

export const FirstBlog = () => {
  return(
    <div className='container blog__page'>
      <div className='blog__container max-w-screen-xl'>
        <div className='blog__infor'>
          <h1 className='blog__title'>Bitcoin Overview</h1>
          <div className='blog__author'>
            <img className='avatar' src='https://scontent.fdad1-2.fna.fbcdn.net/v/t39.30808-1/p320x320/245064916_2001150123381167_6025609838388793769_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=7206a8&_nc_ohc=mIeVkWfJdRAAX_YAmOI&_nc_ht=scontent.fdad1-2.fna&oh=7857d3d47c52647354f361964403e91a&oe=61A6D247'></img>
            <a>Quang Danh </a>
            <a>November 27, 2021 </a>
            <a>Knowledge </a>
            <a>Leave a comment</a>
          </div>
          <p className='blog__para'>In this article, we will learn briefly about Bitcoin and to have a solid knowledge base about Bitcoin, don't miss any of the knowledge mentioned in this article!</p>
          <img className='blog__img' src='https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'></img>
          <p className='blog__category'>What is Bitcoin ?</p>   
          <p className='blog__para'>Before learning about Bitcoin, we need to understand the concept of Bitcoin. Bitcoin is a virtual currency (virtual money is a popular way of Vietnamese people, actually the correct way to call it is electronic money) built on Blockchain Technology. In a nutshell, Bitcoin is created by programming, and it can be used to transfer money from one place to another quickly without having to go through and be controlled by a 3rd party such as a bank. goods, government.</p>
          <iframe width="800" height="480" src="https://www.youtube.com/embed/Gc2en3nHxA4" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          <h3 className='video__title'>Video: Introduction to Bitcoin</h3>
          <p className='blog__category'>Good side and Bad side of Bitcoin</p>  
          <p className='blog__category'>Good side</p>
          <p className='blog__para'>There are many reasons given for you to play Bitcoin, but I summarize some of the main ideas as follows:</p>
          <p className='blog__para'>- Historically (you can see the price chart of Bitcoin), Bitcoin has always been bullish and has a faster price increase than gold, USD. This you can attest through the history of Bitcoin's formation up to the present time. Born more than 10 years ago when with 1 dollar you could buy 1000 Bitcoins and now 1 Bitcoin is worth 35000 dollars as of this article. That is, Bitcoin has increased in price millions of times much faster than gold, silver, and usd. A small example is if in the past you spent $ 1 to buy Bitcoin, now that amount is estimated to be worth 35,000,000.</p>
          <img className='blog__img' src='https://media.discordapp.net/attachments/912759610979536900/914070806093516820/unknown.png'></img>
          <h3 className='video__title'>Bitcoin exchange rate chart according to CoinMarketCap</h3>
          <p className='blog__para'>- Bitcoin has a finite supply (about 21 million Bitcoins), and every 4 years the number of Bitcoins that are mined is halved, while the demand for Bitcoin is increasing day by day. And the law of Supply is less than Demand, the value must always increase</p>
          <p className='blog__para'>- Bitcoin is not controlled by 3rd parties, here can be understood as large organizations. Imagine you want to send some money to relatives in other countries, you have to go to the bank to do the deposit procedures, the amount you send has to be controlled, verified by the bank is quite a lot of processes. Whereas with Bitcoin, with just a few taps you can send Bitcoins to anyone on this earth within 1 note.</p>
          <p className='blog__para'>- Bitcoin is anonymous, meaning that when you send or receive money you will not have to worry about who can track who you are, why you have such a large amount of money, etc.</p>
          <p className='blog__category'>Bad side</p>
          <p className='blog__para'>- Because of its anonymity and unregulated nature, it is inevitable that Bitcoin is used by underground organizations and criminals to launder money.</p>
          <p className='blog__para'>- Monitoring the Bitcoin rate will sometimes make you forget to eat, forget to sleep, addictive 🙂</p>
          <p className='blog__category'>Is Bitcoin a scam?</p>
          <p className='blog__para'>Recently, there have been many virtual currency scams and people have attributed it to Bitcoin scams. This is a wrong concept guys.</p>  
          <p className='blog__para'>Bitcoin is essentially a digital currency running on the blockchain network, it's inanimate and it's not a scam at all. Bitcoin it has been more than 10 years old, although not all countries recognize it, but in the world there are many countries that can use Bitcoin to transact, besides there are many books written on it. about it, you take the time to read more.</p>
          <p className='blog__para'>Ok! We've already have a better look about the things we need to know before entering Bitcoin World. In the next article, We'll tell you "What is Bitcoin". Thanks for Watching and See you in the next article!</p>
          <p className='blog__para'>And you will be wondering “so why are there stories of Bitcoin scams?” I will explain to you like this: Scam here means that some organization, a certain group of people, they draw up a project by themselves and tell you this project is ok, asking you to deposit money (money in this is you can use Bitcoin to deposit) and they will pay you monthly with a very high profit. Many people because of greed for that percentage of profit, deposit Bitcoin for them, then they run away with your Bitcoin, so people say that "Bitcoin is a scam". But the essence of Bitcoin is that it is an inanimate object that scams something, we need to make a clear distinction here.</p>
          <p className='blog__para'>Or some other case an organization they create their own digital currency, and they say their coin is ok, you should buy their coin but actually their coin doesn't have much value of use or application at all, so you spend money to buy, after a while that coin drops dramatically and so the phrase "Bitcoin scam" was born again.</p>
          <p className='blog__para'>Therefore, through the above 2 examples, I hope you will distinguish what is the concept of Bitcoin fraud.</p>
          <p className='blog__title'>Necessary preparations when participating in Bitcoin investment</p>
          <p className='blog__title'>A bank account with Internet Banking function</p>
          <p className='blog__para'>You need to prepare a bank account with Internet Banking function (money transfer) of any bank… However, it is recommended that you use a bank account of Vietcombank, Techcombank or TPBank because most of the services. Bitcoin related is now commonly used through these banks and moreover the fees of these banks are free. To do this, you just need to run to the bank to find the support counter and say "I want to make a bank card with Internet Banking function" and you will be supported quickly.</p>
          <p className='blog__title'>Register an account on Binance</p>
          <p className='blog__para'>This is the largest cryptocurrency exchange in the world today (accounting for more than 70% of the market share in terms of trading volume and traffic compared to other exchanges), with a very large trading volume, and high liquidity. . Here, besides Bitcoin, you can also trade thousands of other cryptocurrencies such as Ethereum, Litecoin, Binance Coin, Qtum, OmiseGo, Ripple, etc.</p>
          <p className='blog__para'>The majority of users in Vietnam and the world use Binance for trading.</p>
          <p className='blog__title'>Register an account on Remitano</p>
          <p className='blog__para'>In addition to the above Binance exchange, this is a reputable Bitcoin trading website in Vietnam today, this website helps you to quickly buy and sell 7 main coins: BTC, ETH, USDT, LTC, XRP, BCH, BNB. The transaction of buying and selling Bitcoin is absolutely safe and the price is also very good.</p>
          <p className='blog__para'>Ok! After this article, we have a better look about Bitcoin. In the next article, We'll find out about 9 ways to play Bitcoin. Thanks for reading till the end of the article and see you!</p>
          <div className='blog__tag'>
            <span>Tags:</span>
            <a> #Bitcoin</a>
            <a> #News</a>
            <a> #Knowledge</a>
            <a> #Trend</a>
            <a> #Trending</a>
          </div>
          <h4>Related Posts</h4>
          <div className='related__product__group'>
            <RelatedPost src='https://onemart.boostifythemes.com/gadget/wp-content/uploads/sites/4/2021/08/new-gadget-add-2.jpg' tittle='5 Tips to how find a place for your Wide screen Monitor' date='August 12, 2021' tag='Trending'/>
            <RelatedPost src='https://onemart.boostifythemes.com/gadget/wp-content/uploads/sites/4/2021/08/new-gadget1.jpg' tittle='A new RGP game from the creator of Final Fantasy is coming to Apple Arcade' date='August 12, 2021' tag='Trending'/>
            <RelatedPost src='https://onemart.boostifythemes.com/gadget/wp-content/uploads/sites/4/2021/08/new-gadget1-1.jpg' tittle='Lenovo’s capable Chromebook Duet is cheaper than ever' date='August 12, 2021' tag='Trending'/>
          </div>
          <LeaveComment/>
        </div>
        <div className='blog__side__bar'>
          <BlogSearch/>
        </div>
      </div>
    </div>
  );
};

export default FirstBlog;