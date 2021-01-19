//SmartPhone
class SmartPhone{
    constructor(ram, batteryPower, price){
        this.ram = ram;
        this.batteryPower = batteryPower;
        this.price = price;
    }
    displayFeatures(){
        return this.ram +'\n'+this.batteryPower+'\n'+this.price;
    }
    remainingAmount(priceIHave){
        this.price = priceIHave - this.price;
    }
}


// AndroidPhone
class AndroidPhone extends SmartPhone(){
    constructor(modelName, ram, batteryPower, price){
        super(ram ,batteryPower, price)
        this.modelName = modelName;
    }
    displayFeatures(){
        return this.modelName +'\n' + this.ram +'\n'+ this.batteryPower +'\n'+ this.price;
    }
    remainingAmount(priceIHave){
        priceIHave = priceIHave - this.price;
        if(priceIHave == 0 || priceIHave < 0)
        {
            return 'Customer has no more amount';
        }
        else 
        {
            return 'Customer has remaining Rs.'+priceIHave +' after buying the android phone';
        }
    }
}


// IPhone
class Iphone extends SmartPhone(){
    constructor(seriesName, ram, batteryPower, price) {
        super(ram, batteryPower, price)
        this.seriesName = seriesName;
    }
    displayFeatures(){
        return this.seriesName +'\n' + this.ram +'\n'+ this.batteryPower +'\n'+ this.price;
    }
    remainingAmount(priceIHave){
        priceIHave = priceIHave - this.price;
        if(priceIHave == 0 || priceIHave < 0)
        {
            return "Customer can't able to buy a phone due to insufficient amount";
        }
        else 
        {
            return 'Customer has remaining Rs.'+priceIHave +' after buying the iphone phone';
        }
    }

}



//MobileCampus
class MobileCampus{
    constructor(noOfMobiles, noOfAndroidMobiles, noOfIphoneMobiles){
        this.noOfMobiles = noOfMobiles;
        this.noOfAndroidMobiles = noOfAndroidMobiles;
        this.noOfIphoneMobiles = noOfIphoneMobiles;
    }
        changeMobileAvailabilityNumber(count,type){
            if(type === 'android'){
                this.NoOfAndroidMobiles = this.NoOfAndroidMobiles - count;
                return 'Available android mobiles are '+this.NoOfAndroidMobiles;
    
            }
            if(type === 'iphone'){
                this.NoOfIPhoneMobiles = this.NoOfIPhoneMobiles - count;
                return 'Available iphone mobiles are '+this.NoOfIPhoneMobiles;
            }
        }
    
}