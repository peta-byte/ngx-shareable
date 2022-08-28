import { Injectable } from '@nestjs/common';
import { ListItem } from '@peta-byte/ui-medley';

@Injectable()
export class AppService {
  info: ListItem[] = [
    {
      id: "0",
      name: "Kenya",
      children: [
        {
          id: "7",
          name: "Kisumu"
        }
      ]
    },
    {
      id: "1",
      name: "Uganda",
      children: [
        {
          id: "8",
          name: "Kampala"
        }
      ]
    },
    {
      id: "2",
      name: "Tanzania",
      children: [
        {
          id: "5",
          name: "Dodoma",
          children: [
            {
              id: "9",
              name: "University of Dodoma"
            },
            {
              id: "10",
              name: "Gaddafi Mosque"
            },
            {
              id: "11",
              name: "Nyerere Square"
            }
          ]
        },
        {
          id: "6",
          name: "Dar es Salaam",
          children: [
            {
              id: "12",
              name: "Village Museum"
            }
          ]
        }
      ]
    },
    {
      id: "3",
      name: "Sudan"
    },
    {
      id: "4",
      name: "Somalia"
    }
  ];

  getData(): ListItem[] {
    return this.info;
  }
}
