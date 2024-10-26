﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entity.Models
{
    public class Cart
    {
        public int Id { get; set; }
        public int Cantidad { get; set; }
        public bool Activo { get; set; }
        public DateTime CreateAt { get; set; }
        public DateTime UpdateAt { get; set; }
        public DateTime DeleteAt { get; set; }
        public int UserId { get; set; }
        public Usuario Usuario { get; set; } = new Usuario();
        public int ProductId { get; set; }
        public Product Product { get; set; } = new Product();
        
        





    }
}
