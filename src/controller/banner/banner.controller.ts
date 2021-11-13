import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';
import { prettyPrintJson } from 'pretty-print-json'

interface FindAllItemProps {
  id: number
  name: string
  url: string
}

@Controller('banner')
export class BannerController {

  @Get()
  findAll(@Res() res: Response){
    const items: Array<FindAllItemProps> = [
      {id: 1, name: 'banner1', url: 'http:xxx.com/xxx'},
      {id: 2, name: 'banner2', url: 'http:xxx.com/xxx'}
    ]

    res.write(
      `<!doctype html>
             <html lang="en">
                <body>
                    <pre>${prettyPrintJson.toHtml(items)}</pre>
                </body>
            <html/>`
    );
    res.send();
  }
}
