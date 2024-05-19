import { cLeading, cTop, HStack, Icon, Spacer, State, Text, TextField, TForm, UIButton, UIController, UIScene, VStack } from '@tuval/forms';

export class AppController extends UIController {

    @State()
    private menu_text: string;

    protected InitController() {
        this.menu_text = 'About';
    }

    public OnBindModel(form: TForm) {

    }
    public LoadView() {
        return (
            VStack({ spacing: 10, alignment: cTop })(
                VStack(
                    Text("Process Library")
                        .width()
                        .height(60)
                        .foregroundColor("black")
                        .marginTop("10 px")
                        .fontWeight("bold")
                        .fontSize("30"),
                ).width()
                    .height(),
                VStack({ spacing: 10 })(
                    HStack({ alignment: cLeading, spacing: 221 })(
                        TextField()
                            .width()
                            .height()
                            .placeholder("Hızlı Arama"),
                        UIButton(
                            Text("Excel'e Aktar").foregroundColor("white")
                        ).background("#2838d3")
                            .cornerRadius(10)
                            .width(100)
                            .height(35)
                    ).width(500)
                        .height(),
                    HStack({ spacing: 350 })(
                        Text("İşleyiş Adı").foregroundColor("black").marginLeft("20 px").fontWeight("bold"),
                        Text("Metrikler").foregroundColor("black").fontWeight("bold")
                    ).background("#d9d9d9")
                        .height()
                        .borderBottom("10 px black"),
                    HStack({ alignment: cLeading })(
                        UIButton(
                            Icon("\\e5cf").size(30)

                        ).width()
                            .height(),
                        Text("Vizyon ve Strateji Geliştirme").foregroundColor("black").fontWeight("bold"),
                        Spacer(),
                        UIButton(
                            Text("Mevcut").foregroundColor("white")

                        ).background("#2abb04")
                            .width(50)
                            .height(20)
                            .cornerRadius(5),
                           
                    )
                        .height()
                        .width(500)
                        .borderBottom("1 px solid black"),
                    HStack(
                            UIButton(
                                Icon("\\e5cc").size(30)
    
                            ).width()
                                .height()
                                .marginLeft("15 px"),
                            Text("İş koseptini ve uzun vadeli vizyonu tanımlayın").foregroundColor("black"),
                            Spacer(),
                            UIButton(
                                Text("Mevcut").foregroundColor("white")
    
                            ).background("#2abb04")
                                .width(50)
                                .height(20)
                                .cornerRadius(5),
                               
                    )
                            .height()
                            .width(500)
                            .borderBottom("1 px solid black"),
                    HStack({ alignment: cLeading })(
                        UIButton(
                            Icon("\\e5cf").size(30)

                        ).width()
                            .height(),
                        Text("Dış Ortamı değerlendirin").foregroundColor("black").fontWeight("bold"),
                        Spacer(),
                        UIButton(
                            Text("Mevcut").foregroundColor("white")

                        ).background("#2abb04")
                            .width(50)
                            .height(20)
                            .cornerRadius(5),
                           
                    ),
                    HStack({ alignment: cLeading })(
                        UIButton(
                            Icon("\\e5cf").size(30)

                        ).width()
                            .height(),
                        Text("Rakipleri Tanımlayın").foregroundColor("black").fontWeight("bold"),
                        Spacer(),
                        UIButton(
                            Text("Mevcut").foregroundColor("white")

                        ).background("#2abb04")
                            .width(50)
                            .height(20)
                            .cornerRadius(5),
                           
                    ),
                    HStack({ alignment: cLeading })(
                        
                        Text("Yeni ürün/hizmet konseptlerine öncelik verin ve seçin ").foregroundColor("black"),
                        Spacer(),
                        UIButton(
                            Text("Mevcut").foregroundColor("white")

                        ).background("#2abb04")
                            .width(50)
                            .height(20)
                            .cornerRadius(5),
                           
                    ),
                    HStack({ alignment: cLeading })(
                        
                        Text("Maliyet ve kalite hedeflerini planlayın ve geliştirin").foregroundColor("black"),
                        Spacer(),
                        UIButton(
                            Text("Mevcut").foregroundColor("white")

                        ).background("#2abb04")
                            .width(50)
                            .height(20)
                            .cornerRadius(5),
                           
                    ),
                    HStack({ alignment: cLeading })(
                        
                        Text("Geliştirme zamanlaması hedeflerini belirtin").foregroundColor("black"),
                        Spacer(),
                        UIButton(
                            Text("Mevcut").foregroundColor("white")

                        ).background("#2abb04")
                            .width(50)
                            .height(20)
                            .cornerRadius(5),
                           
                    ),



                ).width()
                    .height()
            )
        ).backgroundColor("white")




    }
}