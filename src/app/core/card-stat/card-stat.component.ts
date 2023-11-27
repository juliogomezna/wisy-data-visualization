import { AfterContentChecked, AfterViewInit, Component, Input } from "@angular/core";
import Chart from 'chart.js/auto';

@Component({
    selector: 'wisy-card-stat',
    templateUrl: './card-stat.component.html',
    styleUrls: ['./card-stat.component.scss']
})
export class CardStatComponent implements AfterViewInit{

    @Input()
    title: string = ''

    @Input()
    data: any = null
    
    @Input()
    id: number=0

    @Input()
    code: string=''

    @Input()
    imageUrl?: string | undefined

    @Input()
    displayLink?: boolean = true

    chart: any = [];

    labels: string[]= []
    stats: number[]=[]
  ngOnInit(): void {
    
  }

  ngAfterViewInit(): void {
    if(this.id && !this.imageUrl){
        this.setConfigs()
        let aleatoryColor= '#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0')

        this.chart = new Chart('canva-'+this.id, {
            type: 'line',
            data: {

                labels: this.labels,
                datasets: [
                    {
                    label: 'Temperature',
                    data: this.stats,
                    borderColor: aleatoryColor,
                    backgroundColor: aleatoryColor,
                    }
                ]
                },
            options: {
                responsive: true,
                plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Weather forecast'
                }
                }
            }
          });
      }
    }

    setConfigs(){
        this.labels=[]
        this.stats=[]

        if(this.data.properties.periods ){
            this.data.properties.periods.forEach((period: any) => {
                this.labels.push(period.name)
                this.stats.push(period.temperature)
            });
        }
    }
}



