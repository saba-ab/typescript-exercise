# typescript-exercise

შევქმნათ კლასი BankAccount რომელსაც ექნება accountNumber,balance და transactionHistory ფროფერთები.
კონსტრუქტორში უნდა ვიღებდეთ accountNumber და initialBalance მნიშვნელობებს.
გარედან არუნდა იყოს შესაძლებელი accountNumber, balance და transactionHistory შეცვლა.
კლასში უნდა გვქონდეს მეთოდები:
getAccountInfo
deposit - თანხის დამატება ანგარიშზე.
withdraw - თანხის მოკლება ანგარიშიდან.
transferFunds - გადარიცხვა სხვა BankAccount*ზე
getTransactionHistory - აბრუნებს transactionHistory* მასივს
recordTransaction - transactionHistory_ში ამატებს ჩნაწერს ტრანსფერის შესახებ

შევქმნათ მინიმუმ 2 BankAccount_ის ინსტანსი.
გავაკეთოთ სხვადასხვა ოპერაციები.
დავბეჯდოთ შექმნილი ექაუნთების transactionHistory.
