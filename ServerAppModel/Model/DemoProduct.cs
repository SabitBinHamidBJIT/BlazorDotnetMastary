using System;
using System.Collections.Generic;
using System.Text;

namespace ServerAppModel.Model
{
    public  class DemoProduct
    {
        public int Id {  get; set; }
        public string Name { get; set; }
        public bool IsActive { get; set; }
        public double Price { get; set; }
        public List<DemoProductProperty> Properties { get; set; }
    }
}
